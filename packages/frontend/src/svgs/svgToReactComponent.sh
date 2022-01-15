#!/bin/sh

# Feed this script a file that uses kebab case React attributes 
# and it'll mutate those attributes in place to their camelCase equivalents

if [ ! -f $1 ]; then
  echo "not a file"
  echo $1
  exit 1
fi

# This list is non-exhaustive, I'll add more as I go on
# -i is "inplace" meaning edit the file in place instead of writing to stdout
sed -i "
  s/stroke-miterlimit/strokeMiterlimit/g;
  s/stroke-width/strokeWidth/g
  s/stroke-linecap/strokeLinecap/g
  s/stroke-linejoin/strokeLinejoin/g
" $1


exit 0
