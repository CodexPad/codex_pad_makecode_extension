#ifndef _FIFO_H_
#define _FIFO_H_

#include <cstddef>
#include <cstdint>
#include <cstring>

template <typename T>
class Fifo {
 public:
  explicit Fifo(const size_t capacity) : capacity_(RoundUpToPowerOfTwo(capacity)), mask_(capacity_ - 1), buffer_(new T[capacity_]) {
  }

  ~Fifo() {
    delete[] buffer_;
  }

  bool empty() const {
    return count() == 0;
  }

  bool full() const {
    return count() == mask_;
  }

  bool Push(const T& data, bool force = false) {
    if (full()) {
      if (force) {
        read_ptr_ = (read_ptr_ + 1) & mask_;
      } else {
        return false;
      }
    }

    buffer_[write_ptr_] = data;
    write_ptr_ = (write_ptr_ + 1) & mask_;
    return true;
  }

  bool Push(const T* data, bool force = false) {
    return Push(*data, force);
  }

  void Advance(size_t count = 1) {
    read_ptr_ = (read_ptr_ + count) & mask_;
  }

  T Pop() {
    T value = buffer_[read_ptr_];
    read_ptr_ = (read_ptr_ + 1) & mask_;
    return value;
  }

  bool Pop(T& data) {
    if (empty()) {
      return false;
    }

    data = Pop();
    return true;
  }

  bool Pop(T* data) {
    return Pop(*data);
  }

  void Clear() {
    write_ptr_ = read_ptr_;
  }

  size_t count() const {
    return (write_ptr_ - read_ptr_) & mask_;
  }

  size_t capacity() const {
    return mask_;
  }

  size_t free_space() const {
    return mask_ - count();
  }

 private:
  Fifo(const Fifo&) = delete;
  Fifo& operator=(const Fifo&) = delete;

  static size_t RoundUpToPowerOfTwo(size_t value) {
    if (value < 2) {
      return 2;
    }

    value--;
    for (size_t shift = 1; shift < sizeof(size_t) * 8; shift <<= 1) {
      value |= value >> shift;
    }
    value++;

    return value;
  }

  const size_t capacity_;
  const size_t mask_;
  T* buffer_;
  // T buffer_[N];
  size_t read_ptr_ = 0;
  size_t write_ptr_ = 0;
};

#endif