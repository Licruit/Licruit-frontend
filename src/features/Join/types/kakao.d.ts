export interface Place {
  id: string;
  place_name: string;
  address_name: string;
  road_address_name: string;
  x: string;
  y: string;
}

declare global {
  interface Window {
    kakao: {
      maps: {
        services: {
          Places: new () => {
            keywordSearch(
              query: string,
              callback: (
                data: Place[],
                status: kakao.maps.services.Status
              ) => void
            ): void;
          };
          Status: {
            OK: 'OK';
            ZERO_RESULT: 'ZERO_RESULT';
            ERROR: 'ERROR';
          };
        };
      };
    };
  }
}
