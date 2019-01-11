local skynet = require "skynet"
local socket = require "skynet.socket"
require "skynet.manager"

local service_name = "LISTEN_SOCKET"
local agent_name = "socketagent"
local stop = false

local command = {}

function command.STOP()
  stop = true;
end

function listen_connect()
  local addr = skynet.getenv("listen_addr")
  if not addr then
    addr = "127.0.0.1:1997"
  end
  skynet.error("listen addr : "..addr)
  while not stop do
    local socket_id = skynet.listen(addr)
    assert(socket_id)
    skynet.newservice(agent_name, socket_id)
  end
end

skynet.start(function()
  skynet.dispatch("lua", function(session, address, cmd, ...)
    local f = command[cmd]
    if f then 
      skynet.ret(skynet.pack(f(...)))
    else
      print("error command in listen socket")
    end
  end)
  skynet.register(service_name)
  listen_connect()
end)

