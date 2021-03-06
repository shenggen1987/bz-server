/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	// 站点名称
    siteName: {
      type: 'string',
      required: true,
      minLength:1,
      maxLength:10
    },
    // 邮箱
    email: {
      type: 'email',
      unique: true,
      required: true
    },
    // 密码
    password: {
      type: 'string',
      required: true
    },
    // 站点简介
    siteDesc: {
      type: 'string',
      defaultsTo: '暂无简介',
      maxLength:40
    },
    // 是否管理员（默认为非管理员）
    isAdmin: {
      type: 'boolean',
      defaultsTo: false
    }
  }
};

