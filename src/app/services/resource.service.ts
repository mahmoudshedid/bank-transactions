import { Injectable, Inject, ErrorHandler } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnknownError } from '../common/error/unknown.error';
import { NotFoundError } from '../common/error/not-found.error';
import { BadRequestError } from '../common/error/bad-request.error';
import { Resource } from '../models/resource';
import { Serializer } from '../models/serializer';
import { map, retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class ResourceService<T extends Resource> {

  constructor(private httpClient: HttpClient,
              @Inject(String) private url: string,
              @Inject(String) private endpoint: string,
              @Inject(String) private serializer: Serializer,
              @Inject(String) private resourceName: string) { }

  /**
   * Get generic object list from API by ID.
   */
  list(): Observable<T[]> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}`)
      .pipe(
        map((data: any) => this.convertData(data.data)),
        retry(1),
        catchError(this.handleError),
      );
  }

  /**
   * Convert object to serialize.
   * @param data any
   */
  private convertData(data: any): T[] {
    return data.map((item: any) => this.serializer.fromJson(item));
  }

  /**
   * Handle errors from API calling.
   * @param error handleError
   */
  private handleError(error: Response): Observable<T[]> {
    if (error.status === 404) {
      console.log(this.resourceName);
      return throwError(new NotFoundError(error, this.resourceName));
    }

    if (error.status === 400) {
      return throwError(new BadRequestError(error, this.resourceName));
    }

    return throwError(new UnknownError(error));
  }
}
