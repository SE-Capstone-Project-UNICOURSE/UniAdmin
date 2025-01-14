import { BottomScreen } from '@app/features';
import { HomeTabParams } from '../types/HomeTabParams.type';
import { BottomTabRoute } from '../types/Route.type';

const useBottomTabRoutes = (): BottomTabRoute<HomeTabParams>[] => {
  const routes: BottomTabRoute<HomeTabParams>[] = [
    {
      name: 'homeTab',
      component: BottomScreen.HomeView,
      options: { headerShown: false },
    },
    {
      name: 'insightTab',
      component: BottomScreen.InsightView,
      options: { headerShown: false },
    },
    {
      name: 'paymentTab',
      component: BottomScreen.PaymentView,
      options: { headerShown: false },
    },
    {
      name: 'settingTab',
      component: BottomScreen.SettingView,
      options: { headerShown: false },
    },
  ];

  return routes;
};

export default useBottomTabRoutes;
