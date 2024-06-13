import { Injectable } from '@angular/core'
import { HousingLocation } from './housing-location'

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:3000/locations'

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    return fetch(this.url).then(data => data.json() ?? [])
  }

  async getHousingLocationById(
    id: Number
  ): Promise<HousingLocation | undefined> {
    return fetch(`${this.url}/${id}`).then(data => data.json() ?? [])
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email)
  }
}
