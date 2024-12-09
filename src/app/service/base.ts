import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

instance.interceptors.request.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (config: any) => {
    return {
      ...config,
    };
  },

  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;

// import axios from "axios";

// // axios instance 생성
// const instance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_BASE_URL,
// });

// // 요청 인터셉터에서 헤더에 토큰을 추가
// instance.interceptors.request.use(
//   (config) => {
//     // 쿠키에서 accessToken과 refreshToken을 가져옵니다.
//     const accessToken = document.cookie
//       .split("; ")
//       .find((row) => row.startsWith("accessToken="))
//       ?.split("=")[1];
//     const refreshToken = document.cookie
//       .split("; ")
//       .find((row) => row.startsWith("refreshToken="))
//       ?.split("=")[1];

//     // 토큰이 있으면 헤더에 추가
//     if (accessToken) {
//       config.headers["Authorization"] = `Bearer ${accessToken}`;
//     }

//     // 만약 refreshToken이 필요한 경우, 추가적으로 설정 가능
//     if (refreshToken) {
//       // refreshToken을 별도로 처리할 경우 설정
//       config.headers["x-refresh-token"] = refreshToken; // 예시로 추가
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default instance;
