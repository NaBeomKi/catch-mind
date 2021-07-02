import { disableChat, enableChat } from "./chat";
import {
  disableCanvas,
  hideControls,
  showControls,
  enableCanvas,
  resetCanvas,
} from "./paint";

const board = document.getElementById("jsPBoard");
const notifis = document.getElementById("jsNotifis");

const addPlayers = (players) => {
  board.innerHTML = "";
  players.forEach((player) => {
    const playerElement = document.createElement("span");
    playerElement.innerText = `${player.nickname}: ${player.points}`;
    board.appendChild(playerElement);
  });
};

const setNotifi = (text = null) => (notifis.innerText = text);

export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);

export const handleGameStarted = () => {
  setNotifi();
  disableCanvas();
  hideControls();
  enableChat();
};

export const handleLeaderNotifi = ({ word }) => {
  setNotifi(`You are the leader, paint: ${word}`);
  showControls();
  enableCanvas();
  disableChat();
};

export const handleGameEnded = () => {
  setNotifi("Game ended.");
  disableCanvas();
  hideControls();
  resetCanvas();
};

export const handleGameStarting = () => setNotifi("Game sill start soon.");
