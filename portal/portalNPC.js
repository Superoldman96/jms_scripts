/*
	map id : 211070000, 謁見室前の廊下
	pn: lionCastleenter

*/

function enter(pi) {
	switch (pi.getPortal().getName()) {
		case "lionCastleenter": {
			var map_to = pi.getPlayer().findMap(211070100);
			map_to.resetFully();
			pi.warp(211070100, "lioncastleout");
			pi.spawnNpc(2161000, -40, -181);
			return true;
		}
		case "lioncastleout": {
			pi.warp(211070000, "lionCastleenter");
			return true;
		}
		default: {
			break;
		}
	}

	return false;
}