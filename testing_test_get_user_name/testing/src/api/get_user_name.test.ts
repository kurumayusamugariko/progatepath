import {getUserName} from "@/api/get_user_name";
import {fetchUser} from "@/api/fetch_user";

jest.mock("@/api/fetch_user", () => ({
  fetchUser: jest.fn().mockImplementation((id: number) => {
    if (id === 1) {
      return Promise.resolve({name: "Mock User Name"});
    } else {
      return Promise.resolve(null);
    }
  }),
}));

describe("getUserName", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("returns the correct name on fetchUser success", async () => {
    const userName = await getUserName(1);
    expect(userName).toBe("Mock User Name");
    expect(fetchUser).toHaveBeenCalledWith(1);
    expect(fetchUser).toBeCalledTimes(1);
  });

  test("returns null on fetchUser failure", async () => {
    const ret = await getUserName(-1);
    expect(ret).toBe(null);
    expect(fetchUser).toHaveBeenCalledWith(-1);
    expect(fetchUser).toBeCalledTimes(1);
  });
});
