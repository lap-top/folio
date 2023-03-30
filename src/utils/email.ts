// aws-ses.js
import { TRPCError } from "@trpc/server";
import * as AWS from "aws-sdk";
import { env } from "~/env.mjs";

AWS.config.update({
  accessKeyId: env.A_ACCESS_KEY,
  secretAccessKey: env.A_SECRET_ACCESS_KEY,
  region: env.A_REGION,
});

const ses = new AWS.SES();

export const sendEmail = async (email: string, message: string) => {
  const params = {
    Source: env.SES_SENDER_EMAIL,
    Destination: {
      ToAddresses: [env.SES_RECIPIENT_EMAIL],
    },
    Message: {
      Subject: {
        Data: `Folio: ${email}`,
      },
      Body: {
        Text: {
          Data: message,
        },
      },
    },
  };
  const response = await ses
    .sendEmail(params)
    .promise()
    .then((data) => {
      return true;
    })
    .catch(() => {
      throw new TRPCError({
        message: "Trouble sending email",
        code: "BAD_REQUEST",
      });
    });
  return response;
};
