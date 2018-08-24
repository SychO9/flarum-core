import Model from '../Model';
import computed from '../utils/computed';
import { getPlainContent } from '../utils/string';

export default class Post extends Model {}

Object.assign(Post.prototype, {
  number: Model.attribute('number'),
  discussion: Model.hasOne('discussion'),

  createdAt: Model.attribute('createdAt', Model.transformDate),
  user: Model.hasOne('user'),
  contentType: Model.attribute('contentType'),
  content: Model.attribute('content'),
  contentHtml: Model.attribute('contentHtml'),
  contentPlain: computed('contentHtml', getPlainContent),

  editedAt: Model.attribute('editedAt', Model.transformDate),
  editUser: Model.hasOne('editUser'),
  isEdited: computed('editedAt', editedAt => !!editedAt),

  hideTime: Model.attribute('hideTime', Model.transformDate),
  hideUser: Model.hasOne('hideUser'),
  isHidden: computed('hideTime', hideTime => !!hideTime),

  canEdit: Model.attribute('canEdit'),
  canHide: Model.attribute('canHide'),
  canDelete: Model.attribute('canDelete')
});
