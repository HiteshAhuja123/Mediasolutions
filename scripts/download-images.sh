#!/bin/sh
# Downloads the placeholder Unsplash images into public/images/stock/
cd "$(dirname "$0")/.." || exit 1
mkdir -p public/images/stock
for id in \
  photo-1558618666-fcd25c85cd64 photo-1540575467063-178a50c2df87 \
  photo-1486325212027-8081e485255e photo-1555529669-e69e7aa0ba9a \
  photo-1517604931442-7e0c8ed2963c photo-1593784991095-a205069470b6 \
  photo-1504711434969-e33886168f5c photo-1432888498266-38ffec3eaf0a \
  photo-1492684223066-81342ee5ff30 photo-1518770660439-4636190af475 \
  photo-1507003211169-0a1dd7228f2d photo-1522202176988-66273c2fd55f \
  photo-1534536281715-e28d76689b4d photo-1478737270239-2f02b77fc618
do
  curl -fsSL "https://images.unsplash.com/$id?w=1200&q=80" -o "public/images/stock/$id.jpg" \
    && echo "ok $id" || echo "FAILED $id"
done

