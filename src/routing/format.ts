import { generatePath } from 'react-router-dom';
import { AppPath } from './config.ts';

export function genDashboardPagePath(): string {
  return generatePath(AppPath.dashboard);
}

export function genApplicationCreatePagePath(): string {
  return generatePath(AppPath.createApplication);
}
