import { encode } from 'html-entities';
import { error } from '../../../../lib/log/logger.js';
import { INTERNAL_SERVER_ERROR } from '../../../../lib/util/httpStatus.js';

export default async (err, request, response, delegate, next) => {
  error(err);
  // Set this flag to make sure this middleware only be executed 1 time
  response.locals.errorHandlerTriggered = true;
  const promises = [];
  Object.keys(delegate).forEach((id) => {
    // Check if middleware is async
    if (delegate[id] instanceof Promise) {
      promises.push(delegate[id]);
    }
  });

  // Wait for all executing async middleware to be settled before sending response
  await Promise.allSettled(promises);
  // Check if the header is already sent or not.
  if (response.headersSent) {
    // TODO: Write a log message or next(error)?.
  } else if (request.currentRoute.isApi === true) {
    response.status(INTERNAL_SERVER_ERROR).json({
      data: null,
      error: {
        status: INTERNAL_SERVER_ERROR,
        message: err.message
      }
    });
  } else {
    response.status(500).send(encode(err.message));
  }
};
