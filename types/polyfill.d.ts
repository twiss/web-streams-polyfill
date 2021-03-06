import {
    ByteLengthQueuingStrategy as WhatWGByteLengthQueuingStrategy,
    CountQueuingStrategy as WhatWGCountQueuingStrategy,
    ReadableStream as WhatWGReadableStream,
    TransformStream as WhatWGTransformStream,
    WritableStream as WhatWGWritableStream
} from 'whatwg-streams';

export type ReadableStream<R = any> = WhatWGReadableStream<R>;
export const ReadableStream: typeof WhatWGReadableStream;

export type WritableStream<W = any> = WhatWGWritableStream<W>;
export const WritableStream: typeof WhatWGWritableStream;

export type CountQueuingStrategy = WhatWGCountQueuingStrategy;
export const CountQueuingStrategy: typeof WhatWGCountQueuingStrategy;

export type ByteLengthQueuingStrategy = WhatWGByteLengthQueuingStrategy;
export const ByteLengthQueuingStrategy: typeof WhatWGByteLengthQueuingStrategy;

export type TransformStream<R = any, W = any> = WhatWGTransformStream<R, W>;
export const TransformStream: typeof WhatWGTransformStream;
