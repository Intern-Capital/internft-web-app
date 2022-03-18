echo "-- Install --"
# Install dependencies
yarn --production

echo "-- Build --"
# Build
yarn build

echo "-- Deploy --"
# Sync build with our S3 bucket
aws s3 sync build s3://internft-website
# Invalidate cache
aws cloudfront create-invalidation --distribution-id E27U1QRLYECV67 --paths "/*" --no-cli-pager