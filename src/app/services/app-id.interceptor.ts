import { HttpInterceptorFn } from '@angular/common/http';

export const APP_ID = 'APPID=faf17d6bfe1477a97755d5134779e59c';

export const appIdInterceptor: HttpInterceptorFn =
  (oldRequest, next) => {
  if (oldRequest.url.indexOf('weather')) {
    const clonedRequest = oldRequest.clone({
      url: `${oldRequest.url}&${APP_ID}`
    });
    return next(clonedRequest);
  }

  return next(oldRequest);
};
