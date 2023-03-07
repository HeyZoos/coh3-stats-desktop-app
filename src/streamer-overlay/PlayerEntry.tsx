import React from "react"
import { FullPlayerData } from "../game-data-provider/GameData"

export interface PlayerEntryProps {
    playerData: FullPlayerData
}

export const PlayerEntry: React.FC<PlayerEntryProps> = ({ playerData }) => {
    return (
        <div
            style={{
                color: "white",
                fontSize: 20,
                fontFamily: "'Tilt Warp', cursive",
            }}
        >
            <img
                src={
                    "https://raw.githubusercontent.com/cohstats/coh3-stats-desktop-app/master/public/factions/" +
                    playerData.faction +
                    ".webp"
                }
                width={25}
                height={25}
                style={{ paddingRight: 10 }}
            />
            <span
                style={{
                    paddingRight: 10,
                    minWidth: "4ch",
                    display: "inline-block",
                    textAlign: "center",
                }}
            >
                {playerData.rank === undefined || playerData.rank === -1
                    ? "-"
                    : "#" + playerData.rank}
            </span>{" "}
            <span
                style={{
                    paddingRight: 10,
                    minWidth: "4ch",
                    display: "inline-block",
                    textAlign: "center",
                }}
            >
                {playerData.rating === undefined || playerData.rating === -1
                    ? "-"
                    : playerData.rating}
            </span>{" "}
            <span
                style={{
                    maxWidth: "17ch",
                    display: "inline-block",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                }}
            >
                {playerData.name}
            </span>
        </div>
    )
}