import { Observable } from 'rxjs/internal/Observable';
import { sourceAsObservable } from '../util/sourceAsObservable';
import { FOType, Sink } from 'rxjs/internal/types';
import { Subscription } from 'rxjs/internal/Subscription';

export function lift<T, R>(operatorDef: (source: Observable<T>, dest: Sink<R>, subs: Subscription) => void) {
  return (source: Observable<T>) =>
    sourceAsObservable((type: FOType, dest: Sink<R>, subs: Subscription) => {
      if (type === FOType.SUBSCRIBE) {
        operatorDef(source, dest, subs);
      }
    });
}
