// createResource.ts

type Resource<T> = {
  read: () => T;
};

export function createResource<T>(promise: Promise<T>): Resource<T> {
  let status: "pending" | "success" | "error" = "pending";
  let result: T;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      if (status === "pending") throw suspender;
      if (status === "error") throw result;
      if (status === "success") return result;
      // For type safety, adding an `else` case to ensure the function always returns
      throw new Error("Unexpected status");
    },
  };
}
