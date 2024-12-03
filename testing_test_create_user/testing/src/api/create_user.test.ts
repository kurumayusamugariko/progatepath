import {createUser} from "@/api/create_user";

import {resetDB} from "@/api/db/reset_db";
import {databaseManager} from "@/api/db";

describe("createUser", () => {
  beforeEach(async () => {
    const db = await databaseManager.getInstance();
    await resetDB(db);
  });
  test("success and find user", async () => {
    expect.assertions(2);
    const user = await createUser("test name", "test@example.com");
    if (user) {
      expect(user.name).toBe("test name");
      expect(user.email).toBe("test@example.com");
    }
  });

  test("fails because invalid input", async () => {
    const ret = await createUser("", "");
    expect(ret).toBeNull();
  });
});
