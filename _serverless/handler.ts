// eslint-disable-next-line import/no-unresolved
import { CloudFrontRequestEvent, CloudFrontRequestCallback } from 'aws-lambda'

const domain = '.timeline.schoen.world'

const originHostname = 'timeline.schoen.world.s3.amazonaws.com'

export const redirectPrSubdomain = (
  event: CloudFrontRequestEvent,
  _context,
  callback: CloudFrontRequestCallback,
) => {
  const { request } = event.Records[0].cf
  const { headers } = request
  const hostHeader = headers.host[0].value

  if (hostHeader.endsWith(domain)) {
    const prString = hostHeader.substring(0, hostHeader.length - domain.length)
    const prPath = prString
      .split('.')
      .reverse()
      .join('/')
    request.uri = `/${prPath}${request.uri}`
  }

  // fix the host header so that S3 understands the request
  headers.host[0].value = originHostname

  // return control to CloudFront with the modified request
  return callback(null, request)
}
