/*
 * @Author: mujin
 * @Date: 2022-03-14 10:23:16
 * @LastEditTime: 2022-03-14 11:38:15
 * @Description: 
 */
const fs = require('fs');
const msg = fs
  .readFileSync('.git/COMMIT_EDITMSG', 'utf-8')
  .trim()
const commitRules = fs.readFileSync('./doc/commitRules.md','utf-8');
const commitRE = /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?:.{1,50}/

if (!commitRE.test(msg)) {
    console.log('git commit信息校验不通过')

    console.error(`git commit的信息格式不对, 需要使用 title(scope): desc的格式
      比如: 
      ${commitRules} 
      具体校验逻辑看 scripts/verifyCommit.js
    `)
    process.exit(1)
  

} else {
  console.log('git commit信息校验通过')
}
