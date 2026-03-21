function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.isLeader() || pi.getPlayerCount(920010700) != 0) {
                if (pi.isLeader()) {
		    pi.mapMessage("ｶ､ｪi､J<ｦV､WｳqｹD>");
                }
		pi.warp(920010700, 0);
		pi.playPortalSE();
	} else {
		pi.playerMessage("ｶ､ｪi､J､ｧｫ皃~ｯ犖i､J");
	}
}
