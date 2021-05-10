import { useQuery } from "react-query";
import { request, gql } from "graphql-request";

const endpoint = "http://localhost:3000/graphql";

function useMessages() {
  return useQuery(
    "messages",
    async () => {
      const { messages } = await request(
        endpoint,
        gql`
          query {
            messages {
              id
              username
              msg
            }
          }
        `
      );

      return messages;
    },
    {
      refetchInterval: 1000,
      notifyOnChangeProps: ["data"],
    }
  );
}

export default useMessages;
