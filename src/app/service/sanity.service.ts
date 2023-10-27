import { Injectable } from '@angular/core';
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from '@sanity/client';
import { Post, SpecificPost, indexQuery } from './queries/sanity.queries';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SanityService {

  constructor() {
  }


  sanityClientCredentials = {
    option: createClient({
      projectId: environment.SANITY_PROJECT_ID,
      dataset: environment.SANITY_DATASET,
      apiVersion: environment.SANITY_API_VERSION,
    })
  }

  urlFor = (source: any) => imageUrlBuilder(this.sanityClientCredentials.option).image(source);

  async getAllPosts(): Promise<Post[]> {
    return await this.sanityClientCredentials.option.fetch(indexQuery);
  }

  async getSpecificPost(slug: string): Promise<Post[]> {
    return await this.sanityClientCredentials.option.fetch(SpecificPost, { slug }).then(
    )
  }

}