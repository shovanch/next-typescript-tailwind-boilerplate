import { useMutation, useQuery } from "react-query";

import { fetchAuthUser } from "@/shared/services";
import { useAuthUser } from "@/shared/contexts/useState.context";
import { useInput } from "@/shared/contexts/dispatch.context";
import { UserResponse } from "@/types/api";

export default function Input(): JSX.Element {
  const postResult = useQuery<UserResponse>("post", () => fetchAuthUser());

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
        className="p-5 bg-blue-500"
        data-testid="useStateContext"
        type="button"
        onClick={() => setAuthUser({ name: "chatterjee" })}
      >
        {authUser.name}
      </button>
      <button
        className="p-5 bg-red-50"
        data-testid="useReducerContext"
        type="button"
        onClick={() => dispatch({ type: "SET_INPUT_VALUE", payload: 1000 })}
      >
        {state.inputValue}
      </button>
      {postResult.isLoading && <p>Post is loading</p>}

      {postResult.error && <p>{postResult.error.status}</p>}

      {postResult.data && <p className="mt-8">{postResult.data.data.email}</p>}

      <h1 className="mt-8">スタビズとは</h1>
    </div>
  );
}
