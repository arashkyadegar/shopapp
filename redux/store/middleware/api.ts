import { toast } from "react-toastify";
import * as actions from "../api";
import { ResponseStatus } from "../../../utility/responseStatus";
import { ToastAuthFail, ToastFail, ToastSuccess } from "@/utility/tostify";
const api =
  ({ dispatch }: any) =>
    (next: any) =>
      async (action: any) => {
        if (action.type !== actions.apiCallBegan.type) return next(action);
        next(action);
        const baseURL = process.env.NEXT_PUBLIC_BASEURL;
        const {
          url,
          method,
          onSuccess,
          onError,
          onStart,
          body,
          headers,
          credentials,
        } = action.payload;

        const requestOptions = {
          method: method,
          headers: headers,
          body: body,
          credentials: credentials,
        };
        if (onStart) dispatch({ type: onStart });
        try {
          const response = await fetch(baseURL + url, requestOptions);
          console.log(baseURL + url)
          const result = await response.text();

          switch (response.status) {
            case ResponseStatus.OK: {
              const x = JSON.parse(result);
              dispatch({ type: onSuccess, payload: x });
              ToastSuccess();
              break;
            }
            case ResponseStatus.BAD_REQUEST: {
              dispatch({ type: onError });
              ToastFail(result);
              break;
            }
            case ResponseStatus.UNAUTHORIZED: {
              ToastAuthFail("لطفا لاگین کنید");
              dispatch({ type: onError });
              break;
            }
            case ResponseStatus.NOT_FOUND: {
              ToastFail("مورد درخواستی یافت نشد");

              break;
            }
            case ResponseStatus.TRYING_TO_ADD_A_DUPLICATE: {
              ToastFail("خطای ثبت دوباره");
              break;
            }
            default: {
              ToastFail();
              break;
            }
          }
        } catch (error: any) {
          ToastFail(error);
          if (onError) dispatch({ type: onError });
          // dispatch(actions.apiCallFailed(error.message));

          //specified handling
        }
      };
export default api;
