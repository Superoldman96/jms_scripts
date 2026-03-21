function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.isLeader()) {
                if (pi.getMapId() == 920010200) {
                    if (pi.isLeader()) {
                        pi.mapMessage("ｶ､ｪb<ｴｲｨBｸ・ｰhｳF｡C");
                    }
	            var eim = pi.getEventInstance();
	            var players = eim.getPlayers();
	            var bonusmap = pi.getMap(920010100);
	            for (var i = 0; i < players.size(); i++) {
	                players.get(i).changeMap(bonusmap, bonusmap.getPortal(4));
	            }
//		    pi.warp(920010100, 4);
                } else if (pi.getMapId() == 920010300) {
                    if (pi.isLeader()) {
                        pi.mapMessage("ｶ､ｪb<ｭﾜｮw>ｰhｳF｡C");
                    }
	            var eim = pi.getEventInstance();
	            var players = eim.getPlayers();
	            var bonusmap = pi.getMap(920010100);
	            for (var i = 0; i < players.size(); i++) {
	                players.get(i).changeMap(bonusmap, bonusmap.getPortal(12));
	            }
//		    pi.warp(920010100, 12);
                } else if (pi.getMapId() == 920010400) {
                    if (pi.isLeader()) {
                        pi.mapMessage("ｶ､ｪb<･ｧｫﾇ>ｰhｳF｡C");
                    }
	            var eim = pi.getEventInstance();
	            var players = eim.getPlayers();
	            var bonusmap = pi.getMap(920010100);
	            for (var i = 0; i < players.size(); i++) {
	                players.get(i).changeMap(bonusmap, bonusmap.getPortal(5));
	            }
//		    pi.warp(920010100, 5);
                } else if (pi.getMapId() == 920010500) {
                    if (pi.isLeader()) {
                        pi.mapMessage("ｶ､ｪb<ｫﾊｦL､ｧｫﾇ>ｰhｳF｡C");
                    }
	            var eim = pi.getEventInstance();
	            var players = eim.getPlayers();
	            var bonusmap = pi.getMap(920010100);
	            for (var i = 0; i < players.size(); i++) {
	                players.get(i).changeMap(bonusmap, bonusmap.getPortal(13));
	            }
//		    pi.warp(920010100, 13);
                } else if (pi.getMapId() == 920010600) {
                    if (pi.isLeader()) {
                        pi.mapMessage("ｶ､ｪb<､jﾆU>ｰhｳF｡C");
                    }
	            var eim = pi.getEventInstance();
	            var players = eim.getPlayers();
	            var bonusmap = pi.getMap(920010100);
	            for (var i = 0; i < players.size(); i++) {
	                players.get(i).changeMap(bonusmap, bonusmap.getPortal(15));
	            }
//		    pi.warp(920010100, 15);
                } else if (pi.getMapId() == 920010700) {
                    if (pi.isLeader()) {
                        pi.mapMessage("ｶ､ｪb<ｦV､WｳqｹD>ｰhｳF｡C");
                    }
	            var eim = pi.getEventInstance();
	            var players = eim.getPlayers();
	            var bonusmap = pi.getMap(920010100);
	            for (var i = 0; i < players.size(); i++) {
	                players.get(i).changeMap(bonusmap, bonusmap.getPortal(14));
	            }
//		    pi.warp(920010100, 14);
                } else if (pi.getMapId() == 920010800) {
                    if (pi.isLeader()) {
                        pi.mapMessage("ｶ､ｪb<ｮxｶ・ｰhｳF｡C");
                    }
	            var eim = pi.getEventInstance();
	            var players = eim.getPlayers();
	            var bonusmap = pi.getMap(920010100);
	            for (var i = 0; i < players.size(); i++) {
	                players.get(i).changeMap(bonusmap, bonusmap.getPortal(3));
	            }
//		    pi.warp(920010100, 3);
                } else if (pi.getMapId() == 920011000) {
                    if (pi.isLeader()) {
                        pi.mapMessage("ｶ､ｪb<ｶﾂｷt､ｧｫﾇ>ｰhｳF｡C");
                    }
	            var eim = pi.getEventInstance();
	            var players = eim.getPlayers();
	            var bonusmap = pi.getMap(920010100);
	            for (var i = 0; i < players.size(); i++) {
	                players.get(i).changeMap(bonusmap, bonusmap.getPortal(16));
	            }
//		    pi.warp(920010100, 16);
                }
		pi.playPortalSE();
	} else {
		pi.playerMessage("･uｦｳｶ､ｪ~ｯ爲Mｩwｭn､｣ｭn･X･h");
	}
}
