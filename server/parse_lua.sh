#! /bin/bash

function listFiles
{
  for file in `ls $1`;
  do
    if [ -d "$1/$file" ]
    then
      listFiles "$1/$file"
    else
      sufix="${file##*.}"
      if [ "$sufix" == "lua" ];
      then
        echo "parse $1/$file"
        luac -p "$1/$file"
      fi
    fi
  done
}

listFiles ./
