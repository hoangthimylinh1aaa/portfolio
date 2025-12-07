import { projectsData } from '$lib/data/projects';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    throw error(404, {
      message: 'Project not found',
    });
  }

  return {
    project,
  };
};
