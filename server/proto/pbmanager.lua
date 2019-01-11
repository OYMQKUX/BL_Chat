local proto = require "protobuf"

function pbmanager.register_file(file_name)
  proto.register_file(file_name)
end

function pbmanager.encode(value)
  return proto.encode("messages",value);
end

function pbmanager.decode(value)
  return proto.decode("messages",value)
end