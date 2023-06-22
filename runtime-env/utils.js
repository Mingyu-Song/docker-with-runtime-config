// const findUp = require("find-up");
// const Dotenv = require("dotenv");
const fs = require("fs");

// async function parseDotenv(appEnv) {
//   // dotenv 파싱
//   const envFilePath = await findUp(`.env.${appEnv}`);

//   const parsedEnv = Dotenv.config({ path: envFilePath }).parsed || {};

//   return parsedEnv;
// }

function writeEnv(parsedEnv) {
  // 파싱 된 내용을 /public/__ENV.js에 출력
  const scriptFilePath = `${fs.realpathSync(process.cwd())}/public/__ENV.js`;

  fs.writeFileSync(
    scriptFilePath,
    `window.__ENV = ${JSON.stringify(parsedEnv)}`
  );
}

// async function copyEnv(appEnv) {
//   // 파싱 대상 파일은 '.env'파일로 복사
//   const envFilePath = await findUp(`.env.${appEnv}`);
//   const dotenvFilePath = `${fs.realpathSync(process.cwd())}/.env`;

//   fs.copyFileSync(envFilePath, dotenvFilePath);
// }

module.exports = { writeEnv };
