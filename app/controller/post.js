'use strict';

const BaseController = require('../core/base-controller');

/**
 * @param {Egg.Application} app - egg application
 */
class PostController extends BaseController {

  /** 归档 */
  async archives() {
    const { ctx, service } = this;
    ctx.body = await service.post.archives();
  }
}

module.exports = PostController;
