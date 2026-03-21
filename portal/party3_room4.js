function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.isLeader() || pi.getPlayerCount(920010500) != 0) {
                if (pi.isLeader()) {
		    pi.mapMessage("ｶ､ｪi､J<ｫﾊｦL､ｧｫﾇ>");
                }
		pi.warp(920010500, 0);
		pi.playPortalSE();
	} else {
		pi.playerMessage("ｶ､ｪi､J､ｧｫ皃~ｯ犖i､J");
	}
}
