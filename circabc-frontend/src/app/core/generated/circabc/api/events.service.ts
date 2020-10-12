/**
 * CIRCABC REST API
 * This is the first version of the CIRCABC REST API used by the new User Interface
 *
 * The version of the OpenAPI document: 4.1.4
 * Contact: DIGIT-CIRCABC-SUPPORT@ec.europa.eu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent,
  HttpParameterCodec,
} from '@angular/common/http';
import { CustomHttpParameterCodec } from '../encoder';
import { Observable } from 'rxjs';

import { EventDefinition } from '../model/models';
import { EventItemDefinition } from '../model/models';
import { PagedEventItemDefinition } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  protected basePath = 'http://localhost/service/circabc';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();
  public encoder: HttpParameterCodec;

  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() configuration: Configuration
  ) {
    if (configuration) {
      this.configuration = configuration;
    }
    if (typeof this.configuration.basePath !== 'string') {
      if (typeof basePath !== 'string') {
        basePath = this.basePath;
      }
      this.configuration.basePath = basePath;
    }
    this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
  }

  private addToHttpParams(
    httpParams: HttpParams,
    value: any,
    key?: string
  ): HttpParams {
    if (typeof value === 'object' && value instanceof Date === false) {
      httpParams = this.addToHttpParamsRecursive(httpParams, value);
    } else {
      httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
    }
    return httpParams;
  }

  private addToHttpParamsRecursive(
    httpParams: HttpParams,
    value?: any,
    key?: string
  ): HttpParams {
    if (value == null) {
      return httpParams;
    }

    if (typeof value === 'object') {
      if (Array.isArray(value)) {
        (value as any[]).forEach(
          (elem) =>
            (httpParams = this.addToHttpParamsRecursive(httpParams, elem, key))
        );
      } else if (value instanceof Date) {
        if (key != null) {
          httpParams = httpParams.append(
            key,
            (value as Date).toISOString().substr(0, 10)
          );
        } else {
          throw Error('key may not be null if value is Date');
        }
      } else {
        Object.keys(value).forEach(
          (k) =>
            (httpParams = this.addToHttpParamsRecursive(
              httpParams,
              value[k],
              key != null ? `${key}.${k}` : k
            ))
        );
      }
    } else if (key != null) {
      httpParams = httpParams.append(key, value);
    } else {
      throw Error('key may not be null if value is not object or array');
    }
    return httpParams;
  }

  /**
   * deletes an event within the interest group
   * @param id
   * @param updateMode
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public deleteEvent(
    id: string,
    updateMode: 'Single' | 'AllOccurences' | 'FuturOccurences',
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: undefined }
  ): Observable<any>;
  public deleteEvent(
    id: string,
    updateMode: 'Single' | 'AllOccurences' | 'FuturOccurences',
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: undefined }
  ): Observable<HttpResponse<any>>;
  public deleteEvent(
    id: string,
    updateMode: 'Single' | 'AllOccurences' | 'FuturOccurences',
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: undefined }
  ): Observable<HttpEvent<any>>;
  public deleteEvent(
    id: string,
    updateMode: 'Single' | 'AllOccurences' | 'FuturOccurences',
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: undefined }
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling deleteEvent.'
      );
    }
    if (updateMode === null || updateMode === undefined) {
      throw new Error(
        'Required parameter updateMode was null or undefined when calling deleteEvent.'
      );
    }

    let queryParameters = new HttpParams({ encoder: this.encoder });
    if (updateMode !== undefined && updateMode !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>updateMode,
        'updateMode'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (basicAuth) required
    if (this.configuration.username || this.configuration.password) {
      headers = headers.set(
        'Authorization',
        'Basic ' +
          btoa(this.configuration.username + ':' + this.configuration.password)
      );
    }
    let httpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = [];
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(
        httpHeaderAccepts
      );
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    let responseType: 'text' | 'json' = 'json';
    if (
      httpHeaderAcceptSelected &&
      httpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType = 'text';
    }

    return this.httpClient.delete<any>(
      `${this.configuration.basePath}/events/${encodeURIComponent(String(id))}`,
      {
        params: queryParameters,
        responseType: <any>responseType,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * get the details of an event
   * @param id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getEvent(
    id: string,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<EventDefinition>;
  public getEvent(
    id: string,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpResponse<EventDefinition>>;
  public getEvent(
    id: string,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpEvent<EventDefinition>>;
  public getEvent(
    id: string,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getEvent.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (basicAuth) required
    if (this.configuration.username || this.configuration.password) {
      headers = headers.set(
        'Authorization',
        'Basic ' +
          btoa(this.configuration.username + ':' + this.configuration.password)
      );
    }
    let httpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json'];
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(
        httpHeaderAccepts
      );
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    let responseType: 'text' | 'json' = 'json';
    if (
      httpHeaderAcceptSelected &&
      httpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType = 'text';
    }

    return this.httpClient.get<EventDefinition>(
      `${this.configuration.basePath}/events/${encodeURIComponent(String(id))}`,
      {
        responseType: <any>responseType,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * export the events of one Interest group given a filter and an export format
   * @param id
   * @param filter
   * @param format
   * @param exactDate
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getEventsExport(
    id: string,
    filter: 'Exact' | 'Future' | 'Previous',
    format: 'csv' | 'xls' | 'xml',
    exactDate?: string,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<Blob>;
  public getEventsExport(
    id: string,
    filter: 'Exact' | 'Future' | 'Previous',
    format: 'csv' | 'xls' | 'xml',
    exactDate?: string,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpResponse<Blob>>;
  public getEventsExport(
    id: string,
    filter: 'Exact' | 'Future' | 'Previous',
    format: 'csv' | 'xls' | 'xml',
    exactDate?: string,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpEvent<Blob>>;
  public getEventsExport(
    id: string,
    filter: 'Exact' | 'Future' | 'Previous',
    format: 'csv' | 'xls' | 'xml',
    exactDate?: string,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getEventsExport.'
      );
    }
    if (filter === null || filter === undefined) {
      throw new Error(
        'Required parameter filter was null or undefined when calling getEventsExport.'
      );
    }
    if (format === null || format === undefined) {
      throw new Error(
        'Required parameter format was null or undefined when calling getEventsExport.'
      );
    }

    let queryParameters = new HttpParams({ encoder: this.encoder });
    if (filter !== undefined && filter !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>filter,
        'filter'
      );
    }
    if (exactDate !== undefined && exactDate !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>exactDate,
        'exactDate'
      );
    }
    if (format !== undefined && format !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>format,
        'format'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (basicAuth) required
    if (this.configuration.username || this.configuration.password) {
      headers = headers.set(
        'Authorization',
        'Basic ' +
          btoa(this.configuration.username + ':' + this.configuration.password)
      );
    }
    let httpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json'];
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(
        httpHeaderAccepts
      );
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.get(
      `${this.configuration.basePath}/groups/${encodeURIComponent(
        String(id)
      )}/events/export`,
      {
        params: queryParameters,
        responseType: 'blob',
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * get the events of one Interest group between the given date range
   * @param id
   * @param startDate
   * @param endDate
   * @param language
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getInterestGroupEvents(
    id: string,
    startDate: string,
    endDate: string,
    language?: string,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<Array<EventItemDefinition>>;
  public getInterestGroupEvents(
    id: string,
    startDate: string,
    endDate: string,
    language?: string,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpResponse<Array<EventItemDefinition>>>;
  public getInterestGroupEvents(
    id: string,
    startDate: string,
    endDate: string,
    language?: string,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpEvent<Array<EventItemDefinition>>>;
  public getInterestGroupEvents(
    id: string,
    startDate: string,
    endDate: string,
    language?: string,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getInterestGroupEvents.'
      );
    }
    if (startDate === null || startDate === undefined) {
      throw new Error(
        'Required parameter startDate was null or undefined when calling getInterestGroupEvents.'
      );
    }
    if (endDate === null || endDate === undefined) {
      throw new Error(
        'Required parameter endDate was null or undefined when calling getInterestGroupEvents.'
      );
    }

    let queryParameters = new HttpParams({ encoder: this.encoder });
    if (startDate !== undefined && startDate !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>startDate,
        'startDate'
      );
    }
    if (endDate !== undefined && endDate !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>endDate,
        'endDate'
      );
    }
    if (language !== undefined && language !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>language,
        'language'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (basicAuth) required
    if (this.configuration.username || this.configuration.password) {
      headers = headers.set(
        'Authorization',
        'Basic ' +
          btoa(this.configuration.username + ':' + this.configuration.password)
      );
    }
    let httpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json'];
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(
        httpHeaderAccepts
      );
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    let responseType: 'text' | 'json' = 'json';
    if (
      httpHeaderAcceptSelected &&
      httpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType = 'text';
    }

    return this.httpClient.get<Array<EventItemDefinition>>(
      `${this.configuration.basePath}/groups/${encodeURIComponent(
        String(id)
      )}/events`,
      {
        params: queryParameters,
        responseType: <any>responseType,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * get the events of one Interest group given a filter
   * @param id
   * @param filter
   * @param exactDate
   * @param limit the amount of values per page values &#x3D; 25 (default), 0 (all) or any other value &gt; 0 if not any value is passed, the default value (25) is used
   * @param page the number of the page
   * @param sort the field to sort (_ASC or _DESC)
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getInterestGroupListEvents(
    id: string,
    filter: 'Exact' | 'Future' | 'Previous',
    exactDate?: string,
    limit?: number,
    page?: number,
    sort?: string,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<PagedEventItemDefinition>;
  public getInterestGroupListEvents(
    id: string,
    filter: 'Exact' | 'Future' | 'Previous',
    exactDate?: string,
    limit?: number,
    page?: number,
    sort?: string,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpResponse<PagedEventItemDefinition>>;
  public getInterestGroupListEvents(
    id: string,
    filter: 'Exact' | 'Future' | 'Previous',
    exactDate?: string,
    limit?: number,
    page?: number,
    sort?: string,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpEvent<PagedEventItemDefinition>>;
  public getInterestGroupListEvents(
    id: string,
    filter: 'Exact' | 'Future' | 'Previous',
    exactDate?: string,
    limit?: number,
    page?: number,
    sort?: string,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getInterestGroupListEvents.'
      );
    }
    if (filter === null || filter === undefined) {
      throw new Error(
        'Required parameter filter was null or undefined when calling getInterestGroupListEvents.'
      );
    }

    let queryParameters = new HttpParams({ encoder: this.encoder });
    if (filter !== undefined && filter !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>filter,
        'filter'
      );
    }
    if (exactDate !== undefined && exactDate !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>exactDate,
        'exactDate'
      );
    }
    if (limit !== undefined && limit !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>limit,
        'limit'
      );
    }
    if (page !== undefined && page !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>page,
        'page'
      );
    }
    if (sort !== undefined && sort !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>sort,
        'sort'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (basicAuth) required
    if (this.configuration.username || this.configuration.password) {
      headers = headers.set(
        'Authorization',
        'Basic ' +
          btoa(this.configuration.username + ':' + this.configuration.password)
      );
    }
    let httpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json'];
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(
        httpHeaderAccepts
      );
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    let responseType: 'text' | 'json' = 'json';
    if (
      httpHeaderAcceptSelected &&
      httpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType = 'text';
    }

    return this.httpClient.get<PagedEventItemDefinition>(
      `${this.configuration.basePath}/groups/${encodeURIComponent(
        String(id)
      )}/events/list`,
      {
        params: queryParameters,
        responseType: <any>responseType,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * create a new event within the Interest group
   * @param id
   * @param eventDefinition
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public postEvent(
    id: string,
    eventDefinition: EventDefinition,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: undefined }
  ): Observable<any>;
  public postEvent(
    id: string,
    eventDefinition: EventDefinition,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: undefined }
  ): Observable<HttpResponse<any>>;
  public postEvent(
    id: string,
    eventDefinition: EventDefinition,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: undefined }
  ): Observable<HttpEvent<any>>;
  public postEvent(
    id: string,
    eventDefinition: EventDefinition,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: undefined }
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling postEvent.'
      );
    }
    if (eventDefinition === null || eventDefinition === undefined) {
      throw new Error(
        'Required parameter eventDefinition was null or undefined when calling postEvent.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (basicAuth) required
    if (this.configuration.username || this.configuration.password) {
      headers = headers.set(
        'Authorization',
        'Basic ' +
          btoa(this.configuration.username + ':' + this.configuration.password)
      );
    }
    let httpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = [];
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(
        httpHeaderAccepts
      );
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected !== undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    let responseType: 'text' | 'json' = 'json';
    if (
      httpHeaderAcceptSelected &&
      httpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType = 'text';
    }

    return this.httpClient.post<any>(
      `${this.configuration.basePath}/groups/${encodeURIComponent(
        String(id)
      )}/events`,
      eventDefinition,
      {
        responseType: <any>responseType,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * replaces an event within the interest group
   * @param id
   * @param updateInfo
   * @param updateMode
   * @param eventDefinition
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public putEvent(
    id: string,
    updateInfo:
      | 'GeneralInformation'
      | 'ContactInformation'
      | 'Audience'
      | 'RelevantSpace'
      | 'All',
    updateMode: 'Single' | 'AllOccurences' | 'FuturOccurences',
    eventDefinition: EventDefinition,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: undefined }
  ): Observable<any>;
  public putEvent(
    id: string,
    updateInfo:
      | 'GeneralInformation'
      | 'ContactInformation'
      | 'Audience'
      | 'RelevantSpace'
      | 'All',
    updateMode: 'Single' | 'AllOccurences' | 'FuturOccurences',
    eventDefinition: EventDefinition,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: undefined }
  ): Observable<HttpResponse<any>>;
  public putEvent(
    id: string,
    updateInfo:
      | 'GeneralInformation'
      | 'ContactInformation'
      | 'Audience'
      | 'RelevantSpace'
      | 'All',
    updateMode: 'Single' | 'AllOccurences' | 'FuturOccurences',
    eventDefinition: EventDefinition,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: undefined }
  ): Observable<HttpEvent<any>>;
  public putEvent(
    id: string,
    updateInfo:
      | 'GeneralInformation'
      | 'ContactInformation'
      | 'Audience'
      | 'RelevantSpace'
      | 'All',
    updateMode: 'Single' | 'AllOccurences' | 'FuturOccurences',
    eventDefinition: EventDefinition,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: undefined }
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling putEvent.'
      );
    }
    if (updateInfo === null || updateInfo === undefined) {
      throw new Error(
        'Required parameter updateInfo was null or undefined when calling putEvent.'
      );
    }
    if (updateMode === null || updateMode === undefined) {
      throw new Error(
        'Required parameter updateMode was null or undefined when calling putEvent.'
      );
    }
    if (eventDefinition === null || eventDefinition === undefined) {
      throw new Error(
        'Required parameter eventDefinition was null or undefined when calling putEvent.'
      );
    }

    let queryParameters = new HttpParams({ encoder: this.encoder });
    if (updateInfo !== undefined && updateInfo !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>updateInfo,
        'updateInfo'
      );
    }
    if (updateMode !== undefined && updateMode !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>updateMode,
        'updateMode'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (basicAuth) required
    if (this.configuration.username || this.configuration.password) {
      headers = headers.set(
        'Authorization',
        'Basic ' +
          btoa(this.configuration.username + ':' + this.configuration.password)
      );
    }
    let httpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = [];
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(
        httpHeaderAccepts
      );
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected !== undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    let responseType: 'text' | 'json' = 'json';
    if (
      httpHeaderAcceptSelected &&
      httpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType = 'text';
    }

    return this.httpClient.put<any>(
      `${this.configuration.basePath}/events/${encodeURIComponent(String(id))}`,
      eventDefinition,
      {
        params: queryParameters,
        responseType: <any>responseType,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }
}