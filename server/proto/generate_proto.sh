#! /bin/bash

cp ../../client/resource/proto/messages.proto ./messages.proto
protoc --descriptor_set_out=messages.pb messages.proto
