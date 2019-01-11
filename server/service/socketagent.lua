local skynet = require "skynet"
local socket = require "skynet.socket"
local proto = require "pbmanager"
local db_service_name = "DB"
require "skynet.manager"

local service_name = "SOCKETAGENT"
local socket_id = ...

local command = {
  [0x001] = LOGIN,
  [0x002] = REGISTER,
}
function REGISTER(data)
  local name = data.user_name
  local password = data.password
  local uid_in_db = sky.call(db_service_name, "lua", "GET", name)
  if not uid_in_db then
    skynet.send(db_service_name, "lua", "SET", name, password)
    return true
  else 
    return false
  end
end

function LOGIN(data)
  local name = data.user_name
  local password = data.password
  local real_password = skynet.call(db_service_name, "lua", "GET", name) | ""
  if real_password == password then
    return true
  else 
    return false;
  end
end

skynet.start(function()
  socket.start(socket_id)
  local data = proto.decode(socket.read(socket_id))
  local mid = data.mid;
  local f = command[mid]
  assert(f)
  if not f then
    print("no such mid")
  else
    f(data)
  end
end)
