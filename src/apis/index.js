/**
 * API 함수들의 통합 export 파일
 * 모든 API 함수들을 한 곳에서 import/export
 */

// 설정
export * from "./config.js";

// 수신자 관련 API
export {
  getRecipients,
  postRecipient,
  getRecipientDetail,
  deleteRecipient,
} from "./recipients.js";

// 메시지 관련 API
export { getMessages, postMessage, deleteMessage } from "./messages.js";

// 리액션 관련 API
export { getReactions, postReaction } from "./reactions.js";

// 이미지 관련 API
export { getBackgroundImages, getProfileImages } from "./images.js";

// 별칭으로 export
export { getRecipientDetail as getRollingPapersbackgroundData } from "./recipients.js";
export { getMessages as getRollingPapers } from "./messages.js";
export { deleteRecipient as deleteRollingPaper } from "./recipients.js";
export { postReaction as postReactions } from "./reactions.js";
