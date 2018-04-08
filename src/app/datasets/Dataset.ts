import { Resource } from './resource';
export class Dataset {

  id: string;
  name: string;
  title: string;
  groups: string[];
  organization: string;
  tags: string[];
  licensetitle: string;
  author: string;
  resources: Resource;

  constructor(id: string, name: string, title: string,
    groups: string[], organization: string, tags: string[], licensetitle: string, author: string, resources: Resource) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.groups = groups;
    this.organization = organization;
    this.tags = tags;
    this.licensetitle = licensetitle;
    this.author = author;
    this.resources = resources;
  }

}
