import { useQuery } from "react-query";

import { useInput } from "@/shared/contexts/dispatch.context";
import { useAuthUser } from "@/shared/contexts/useState.context";
import { fetchAuthUser } from "@/shared/services";
import { User } from "@/types/api";

export default function Input() {
  const postResult = useQuery<User, API.Error>("post", () => fetchAuthUser());

  // const postListResult = useQuery("postList", () => fetchPosts({ id: 10 }));

  // const postArrResult = useQuery("postArr", () => fetchPosts());

  // const loginMutation = useMutation(
  //   (data: RequestBody) => createAuthUser(data),
  //   {
  //     onSuccess: (data) => {
  //       //
  //     },
  //     onError: (error) => {
  //       // Handle validation error messages from backend
  //     },
  //   }
  // );

  const { authUser, setAuthUser } = useAuthUser();
  const { state, dispatch } = useInput();

  return (
    <div>
      {/* <button type="button" onClick={() => loginMutation.mutate({ id: 2 })}>
        T
      </button> */}
      <h1 data-testid="testing">heading</h1>
      <button
        type="button"
        className="p-5 bg-blue-500"
        onClick={() => setAuthUser({ name: "chatterjee" })}
        data-testid="useStateContext"
      >
        {authUser.name}
      </button>
      <button
        className="p-5 bg-red-50"
        type="button"
        onClick={() => dispatch({ type: "SET_INPUT_VALUE", payload: 1000 })}
        data-testid="useReducerContext"
      >
        {state.inputValue}
      </button>
      {postResult.isLoading && <p>Post is loading</p>}

      {postResult.error && <p>{postResult.error.status}</p>}

      {postResult.data && <p className="mt-8">{postResult.data.first_name}</p>}

      <h1 className="mt-8">スタビズとは</h1>
    </div>
  );
}
