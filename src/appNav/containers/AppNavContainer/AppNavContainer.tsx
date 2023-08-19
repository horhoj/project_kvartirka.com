import { AppNavData } from '~/appNav/appNavData';
import { AppNavLink } from '~/appNav/components/AppNavLink';
import { AppNavWrapper } from '~/appNav/components/AppNavWrapper';

export function AppNavContainer() {
  return (
    <AppNavWrapper>
      {AppNavData.map((el) => (
        <AppNavLink key={el.id} path={el.path} text={el.text} />
      ))}
    </AppNavWrapper>
  );
}
