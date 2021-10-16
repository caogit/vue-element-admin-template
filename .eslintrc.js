module.exports = {
  // 配置详情   https://www.jianshu.com/p/8f88f6674d2a
  root: true,
  env: {
    node: true,
  },
  // 配置扩展
  //  extends: [
  //   // eslint推荐规则
  //   'eslint:recommended',
  //   // 标准js规则
  //   'standard',
  //   // vue eslint 基本规则
  //   'plugin:vue/base',
  //   // Vue eslint A级推荐规则预设
  //   'plugin:vue/essential',
  //   // Vue eslint B级推荐规则预设
  //   'plugin:vue/strongly-recommended',
  //   // Vue eslint C级推荐规则预设
  //   'plugin:vue/recommended',
  // ],
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
