import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

const RQParallel = () => {
  const { data: heroesResData } = useQuery(["super-heroes"], fetchSuperHeroes);
  const { data: friendsResData } = useQuery(["friends"], fetchFriends);
  // console.log(heroesResData?.data, friendsResData?.data);

  return <div>RQParallel</div>;
};

export default RQParallel;
