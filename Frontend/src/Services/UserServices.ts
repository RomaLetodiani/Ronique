import api from "@/Utils/Api";

const userServices = {
  getCurrent: () => api.get("user/current-user"),
  updateUser: (body: { first_name: string; last_name: string; phone_number: string }) =>
    api.put("user", body),
};

export default userServices;
