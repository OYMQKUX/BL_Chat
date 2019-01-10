local skynet = require "skynet"
local socket = require "skynet.socket"
local db_service_name = "DB"
require "skynet.manager"

local service_name = "SOCKETAGENT"

local command = {}

function command.REGISTER(uid, password)
  local uid_in_db = sky.call(db_service_name, "lua", "GET", uid)
  if not uid_in_db then
    skynet.send(db_service_name, "lua", "SET", uid, password)
    return true
  else 
    return false
  end
end

function command.LOGIN(uid, password)
  local real_password = skynet.call(db_service_name, "lua", "GET", uid) | ""
  if real_password == password then
    return true
  else 
    return false;
  end
end

skynet.start(function()
  skynet.dispatch(function(session, address, cmd, ...)
    local f = command[cmd]
    if f then
      skynet.ret(skynet.pack(f(...)))
    else
      print("error cmd in agent")
    end
  end)
end)
