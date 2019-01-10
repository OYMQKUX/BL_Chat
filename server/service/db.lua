local skynet = require "skynet"
require "skynet.manager"
-- service name
local service_name = "DB"
-- temp db
local db = {};
local command = {};

function command.GET(key)
  return db[key]
end

function command.SET(key, value)
  local last = db[key]
  db[key] = value
  -- if last then
  --   print(key.." "..value.." "..assert(last).." "..db[key])
  -- else 
  --   print(key.." "..value.." nil".." "..db[key])
  -- end
  return last
end

skynet.start(function()
  skynet.dispatch("lua", function(session, address, cmd, ...)
    local f = command[string.upper(cmd)];
    if f then
      skynet.ret(skynet.pack(f(...)))
    else
      print "fuck"
    end
  end)
  skynet.register(service_name)
end)