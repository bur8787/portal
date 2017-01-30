#! /bin/sh
rm -rf target && mkdir target
find src -type f -name "*.html" | xargs -I{} cp -P {} target
#aws s3 cp index.html s3://suzutt.jp/ 
