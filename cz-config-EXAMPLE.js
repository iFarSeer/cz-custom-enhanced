'use strict';

// 配置用例基于下述提交准则

// #### 解决Bug的代码提交
// - 第一句描述解决了什么问题
// - 第二句描述引入这个问题的原因。
// - 第三句简述解决方案。
// - 最后一句描述代码影响范围（可选）

// #### 新增功能的代码提交
// - add:新增了什么模块，简述这个模块是做什么用的。

// #### 重构功能的代码提交
// - 重构功能的代码提交
// - Refactor：重构了什么代码模块，简述为什么重构。

// #### 测试的代码提交
// - 测试的代码提交
// - Test：简述增加某个模块的测试用例。

module.exports = {
  entry: {
    add: {
      value: 'add',
      name: 'add:            新增内容',
      scope: {
        custom: true,
        prefix: ': ',
        message: '任务单号'
      },
      subject: {
        prefix: ' ',
        message: '简述新增内容'
      },
      footer: {
        prefix: '影响范围: ',
        message: '描述代码影响范围'
      }
    },
    update: {
      value: 'update',
      name: 'update:         修改内容',
      scope: {
        custom: true,
        prefix: ': ',
        message: '任务单号'
      },
      subject: {
        prefix: ' ',
        message: '简述修改内容'
      },
      footer: {
        prefix: '影响范围: ',
        message: '描述代码影响范围'
      }
    },
    fix: {
      value: 'fix',
      name: 'fix:            修复问题',
      scope: {
        custom: true,
        prefix: ': ',
        message: '任务单号'
      },
      subject: {
        prefix: ' ',
        message: '简述Bug'
      },
      body: {
        prefix: '原因: ',
        message: '简述问题原因'
      },
      breaking: {
        prefix: '方案: ',
        message: '简述解决方案'
      },
      footer: {
        prefix: '影响范围: ',
        message: '描述代码影响范围'
      }
    },
    merge: {
      value: 'merge',
      name: 'merge:          合并分支',
      subject: {
        prefix: ' ',
        message: '简述合并内容'
      },
      footer: {
        prefix: '影响范围: ',
        message: '描述代码影响范围'
      }
    },
    refactor: {
      value: 'refactor',
      name: 'refactor:       重构内容',
      scope: {
        custom: true,
        prefix: ': ',
        message: '任务单号'
      },
      subject: {
        prefix: ' ',
        message: '简述重构内容'
      },
      body: {
        prefix: '原因: ',
        message: '简述重构原因'
      },
      footer: {
        prefix: '影响范围: ',
        message: '描述代码影响范围'
      }
    },
    docs: {
      value: 'docs',
      name: 'docs:           添加文档',
      scope: {
        custom: true,
        prefix: ': ',
        message: '任务单号'
      },
      subject: {
        prefix: ' ',
        message: '简述文档内容'
      }
    },
    style: {
      value: 'style',
      name: 'style:          代码格式',
      subject: {
        prefix: ' ',
        message: '简述代码格式内容'
      }
    },
    pref: {
      value: 'pref',
      name: 'pref:           优化内容',
      scope: {
        custom: true,
        prefix: ': ',
        message: '任务单号'
      },
      subject: {
        prefix: ' ',
        message: '简述优化内容'
      },
      body: {
        prefix: '原因: ',
        message: '简述优化原因'
      },
      breaking: {
        prefix: '方案: ',
        message: '简述优化方案'
      },
      footer: {
        prefix: '影响范围: ',
        message: '描述代码影响范围'
      }
    },
    revert: {
      value: 'revert',
      name: 'revert:         回退内容',
      subject: {
        prefix: ' ',
        message: '简述回退内容'
      },
      body: {
        prefix: '原因: ',
        message: '简述回退原因'
      },
      footer: {
        prefix: '影响范围: ',
        message: '描述代码影响范围'
      }
    }
  },
  // scopes: [
  //   {name: 'accounts'},
  //   {name: 'admin'},
  //   {name: 'exampleScope'},
  //   {name: 'changeMe'}
  // ],

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: '请选择本次commit的类型:',
    confirmCommit: '您确认要提交以上的commit吗?'
  },
  allowCustomScopes: true
};
